import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Image,
  Font,
  Svg,
  Path,
  Circle,
  Line,
  Rect,
  StyleSheet,
} from "@react-pdf/renderer";
import {
  profile,
  experience,
  skillGroups,
  projects,
  education,
  certifications,
  siteUrl,
  type Experience,
  type Project,
} from "@/lib/data";

// Disable automatic mid-word hyphenation (e.g. "er-ror-handling") — a resume
// should wrap at word boundaries only, never split a word across lines.
Font.registerHyphenationCallback((word) => [word]);

function photoDataUri(): string {
  const file = fs.readFileSync(path.join(process.cwd(), "public", "profile.jpg"));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

const CHARCOAL = "#262626";
const MUTED = "#5a5a5a";
const FAINT = "#8a8a8a";
const ACCENT = "#8a5a12";
const RULE = "#d9d9d9";

const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 42,
    fontSize: 9.25,
    fontFamily: "Helvetica",
    color: CHARCOAL,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerText: {
    flex: 1,
    paddingRight: 18,
  },
  photo: {
    width: 66,
    height: 66,
    borderRadius: 8,
    objectFit: "cover",
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 25,
    letterSpacing: 0.2,
  },
  title: {
    fontSize: 11,
    color: MUTED,
    marginTop: 3,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 7,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
    marginBottom: 2,
  },
  contactIcon: {
    marginRight: 3.5,
  },
  contactText: {
    fontSize: 8.25,
    color: MUTED,
  },
  link: {
    textDecoration: "none",
  },
  sectionHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: ACCENT,
    borderBottomWidth: 1,
    borderBottomColor: RULE,
    paddingBottom: 3,
    marginTop: 8,
    marginBottom: 4,
  },
  paragraph: {
    marginBottom: 3,
    lineHeight: 1.15,
    color: CHARCOAL,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  skillCard: {
    width: "48%",
    marginBottom: 7,
  },
  skillCardLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.75,
    color: CHARCOAL,
    marginBottom: 2.5,
  },
  skillCardValue: {
    fontSize: 8.5,
    lineHeight: 1.28,
    color: MUTED,
  },
  entry: {
    marginBottom: 6,
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.25,
    color: CHARCOAL,
  },
  entryMetaLine: {
    fontSize: 8.75,
    marginTop: 1.5,
    marginBottom: 2.5,
  },
  entryMetaCompany: {
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
  },
  entryMetaRest: {
    color: FAINT,
  },
  description: {
    fontSize: 8.75,
    color: MUTED,
    lineHeight: 1.15,
    marginBottom: 2.5,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 2,
    paddingLeft: 3,
  },
  bulletDot: {
    width: 10,
    color: ACCENT,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.15,
    color: CHARCOAL,
  },
  emphasis: {
    fontFamily: "Helvetica-Bold",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  tagPill: {
    borderWidth: 0.75,
    borderColor: RULE,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 5,
    marginBottom: 4,
  },
  tagPillText: {
    fontSize: 7,
    color: MUTED,
  },
  linksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
  },
  linkPill: {
    fontSize: 7.5,
    color: ACCENT,
    marginRight: 12,
  },
});

// Helvetica (the base14 PDF font react-pdf uses) doesn't cover every
// Unicode glyph in the source copy — swap in ASCII-safe equivalents for PDF output only.
function pdfSafe(text: string): string {
  return text.replace(/→/g, "->");
}

// Bold only quantities/metrics and a couple of high-signal words within bullet
// text, so recruiters can scan outcomes without changing a single word.
const HIGHLIGHT_RE =
  /(?<![A-Za-z0-9-])~?\d[\d,]*\.?\d*\+?%?(?![A-Za-z0-9-])|\b(?:production|bank-wide)\b/gi;
function renderHighlighted(rawText: string): ReactNode[] {
  const text = pdfSafe(rawText);
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  const re = new RegExp(HIGHLIGHT_RE);
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <Text key={match.index} style={styles.emphasis}>
        {match[0]}
      </Text>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

const iconStroke = {
  fill: "none",
  stroke: MUTED,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MailIcon() {
  return (
    <Svg width={7.5} height={7.5} viewBox="0 0 24 24" style={styles.contactIcon}>
      <Rect x={3} y={4} width={18} height={16} rx={2} {...iconStroke} />
      <Path d="m4 6 8 7 8-7" {...iconStroke} />
    </Svg>
  );
}

function PhoneIcon() {
  return (
    <Svg width={7.5} height={7.5} viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
        {...iconStroke}
      />
    </Svg>
  );
}

function PinIcon() {
  return (
    <Svg width={7.5} height={7.5} viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" {...iconStroke} />
      <Circle cx={12} cy={10} r={3} {...iconStroke} />
    </Svg>
  );
}

function LinkIcon() {
  return (
    <Svg width={7.5} height={7.5} viewBox="0 0 24 24" style={styles.contactIcon}>
      <Path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" {...iconStroke} />
      <Line x1={8} y1={12} x2={16} y2={12} {...iconStroke} />
    </Svg>
  );
}

function ContactItem({ icon, text, href }: { icon: ReactNode; text: string; href?: string }) {
  const content = (
    <View style={styles.contactItem}>
      {icon}
      <Text style={styles.contactText}>{text}</Text>
    </View>
  );
  if (!href) return content;
  return (
    <Link style={styles.link} src={href}>
      {content}
    </Link>
  );
}

function Bullet({ children, highlight = false }: { children: string; highlight?: boolean }) {
  return (
    <View style={styles.bulletRow} wrap={false}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>
        {highlight ? renderHighlighted(children) : pdfSafe(children)}
      </Text>
    </View>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <Text style={styles.sectionHeading} minPresenceAhead={36}>
      {children}
    </Text>
  );
}

function ExperienceEntry({ role }: { role: Experience }) {
  return (
    <View style={styles.entry}>
      <Text style={styles.entryTitle} minPresenceAhead={22}>
        {role.role}
      </Text>
      <Text style={styles.entryMetaLine}>
        <Text style={styles.entryMetaCompany}>{role.company}</Text>
        <Text style={styles.entryMetaRest}>
          {" "}
          | {role.period} · {role.location}
        </Text>
      </Text>
      {role.bullets.map((bullet) => (
        <Bullet key={bullet.slice(0, 40)} highlight>
          {bullet}
        </Bullet>
      ))}
    </View>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <View style={styles.entry}>
      <Text style={styles.entryTitle} minPresenceAhead={22}>
        {project.name}
      </Text>
      <Text style={styles.entryMetaLine}>
        <Text style={styles.entryMetaCompany}>{project.org}</Text>
      </Text>
      <Text style={styles.description}>{pdfSafe(project.description)}</Text>
      {project.bullets.map((bullet) => (
        <Bullet key={bullet.slice(0, 40)} highlight>
          {bullet}
        </Bullet>
      ))}
      <View style={styles.tagsRow}>
        {project.tags.map((tag) => (
          <View key={tag} style={styles.tagPill}>
            <Text style={styles.tagPillText}>{tag}</Text>
          </View>
        ))}
      </View>
      {(project.link || project.demoUrl || project.npmUrl) && (
        <View style={styles.linksRow}>
          {project.link && (
            <Link style={styles.linkPill} src={project.link.url}>
              {project.link.label}: {project.link.url.replace("https://", "")}
            </Link>
          )}
          {project.demoUrl && (
            <Link style={styles.linkPill} src={project.demoUrl}>
              Live: {project.demoUrl.replace("https://", "").replace(/\/$/, "")}
            </Link>
          )}
          {project.npmUrl && (
            <Link style={styles.linkPill} src={project.npmUrl}>
              npm: {project.npmUrl.replace("https://www.", "")}
            </Link>
          )}
        </View>
      )}
    </View>
  );
}

export function ResumeDocument() {
  return (
    <Document title={`${profile.name} — Resume`} author={profile.name}>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.headerRow}>
          <View style={styles.headerText}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.title}>{profile.title}</Text>

            <View style={styles.contactRow}>
              <ContactItem icon={<MailIcon />} text={profile.email} href={`mailto:${profile.email}`} />
              <ContactItem icon={<PhoneIcon />} text={profile.phone} />
              <ContactItem icon={<PinIcon />} text={profile.location} />
              <ContactItem
                icon={<LinkIcon />}
                text="linkedin.com/in/abhisek-mishra-64a97873"
                href={profile.linkedin}
              />
              <ContactItem icon={<LinkIcon />} text="github.com/AbhisekMishra" href={profile.github} />
              <ContactItem icon={<LinkIcon />} text={siteUrl.replace("https://", "")} href={siteUrl} />
            </View>
          </View>

          {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf's Image has no alt prop; this isn't DOM */}
          <Image src={photoDataUri()} style={styles.photo} />
        </View>

        <SectionHeading>Professional Summary</SectionHeading>
        {profile.summary.map((paragraph) => (
          <Text key={paragraph.slice(0, 24)} style={styles.paragraph}>
            {pdfSafe(paragraph)}
          </Text>
        ))}

        <SectionHeading>Skills</SectionHeading>
        <View style={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <View key={group.label} style={styles.skillCard}>
              <Text style={styles.skillCardLabel}>{group.label}</Text>
              <Text style={styles.skillCardValue}>{group.skills.join(", ")}</Text>
            </View>
          ))}
        </View>

        <SectionHeading>Work Experience</SectionHeading>
        {experience.map((role) => (
          <ExperienceEntry key={`${role.company}-${role.role}`} role={role} />
        ))}

        <SectionHeading>Featured Projects</SectionHeading>
        {projects.map((project) => (
          <ProjectEntry key={project.name} project={project} />
        ))}

        <SectionHeading>Education</SectionHeading>
        <View style={styles.entry}>
          <Text style={styles.entryTitle} minPresenceAhead={22}>
            {education.degree}
          </Text>
          <Text style={styles.entryMetaLine}>
            <Text style={styles.entryMetaCompany}>
              {education.school} · {education.detail}
            </Text>
            <Text style={styles.entryMetaRest}> | {education.period}</Text>
          </Text>
        </View>

        <SectionHeading>Certifications &amp; Awards</SectionHeading>
        {certifications.map((item) => (
          <Bullet key={item.slice(0, 40)}>{item}</Bullet>
        ))}
      </Page>
    </Document>
  );
}
