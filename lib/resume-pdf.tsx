import type { ReactNode } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Link,
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

// A resume should wrap at word boundaries only, never split a word across lines.
Font.registerHyphenationCallback((word) => [word]);

const CHARCOAL = "#262626";
const MUTED = "#5a5a5a";
const FAINT = "#8a8a8a";
const ACCENT = "#8a5a12";
const RULE = "#d9d9d9";

const styles = StyleSheet.create({
  page: {
    paddingTop: 26,
    paddingBottom: 22,
    paddingHorizontal: 44,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: CHARCOAL,
  },
  name: { fontFamily: "Helvetica-Bold", fontSize: 24, letterSpacing: 0.2 },
  headline: { fontSize: 11, color: MUTED, marginTop: 3 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 7 },
  contactItem: { flexDirection: "row", alignItems: "center", marginRight: 14, marginBottom: 2 },
  contactIcon: { marginRight: 3.5 },
  contactText: { fontSize: 8.25, color: MUTED },
  link: { textDecoration: "none" },
  sectionHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: ACCENT,
    borderBottomWidth: 1,
    borderBottomColor: RULE,
    paddingBottom: 3,
    marginTop: 9,
    marginBottom: 4,
  },
  paragraph: { fontSize: 9, lineHeight: 1.22, color: CHARCOAL },
  skillRow: { flexDirection: "row", marginBottom: 3.5 },
  skillLabel: { width: 118, fontFamily: "Helvetica-Bold", fontSize: 8.75, color: CHARCOAL },
  skillValue: { flex: 1, fontSize: 8.75, lineHeight: 1.25, color: MUTED },
  roleHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  roleTitle: { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: CHARCOAL },
  roleDates: { fontSize: 8.75, color: FAINT },
  roleMeta: { fontSize: 8.75, marginTop: 1.5, marginBottom: 3 },
  company: { fontFamily: "Helvetica-Bold", color: ACCENT },
  metaRest: { color: FAINT },
  entry: { marginBottom: 5 },
  sub: { marginTop: 4 },
  subTitle: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: CHARCOAL },
  stack: { fontSize: 8, color: MUTED, marginTop: 2, paddingLeft: 13 },
  bulletRow: { flexDirection: "row", marginTop: 1.75, paddingLeft: 3 },
  bulletDot: { width: 10, color: ACCENT },
  bulletText: { flex: 1, fontSize: 9, lineHeight: 1.18, color: CHARCOAL },
  description: { fontSize: 8.75, lineHeight: 1.22, color: MUTED },
  lead: { fontFamily: "Helvetica-Bold", color: CHARCOAL },
  linksRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 2.5 },
  linkPill: { fontSize: 7.5, color: ACCENT, marginRight: 12 },
});

// Helvetica (the base14 font react-pdf uses) lacks some glyphs in the source copy.
function pdfSafe(text: string): string {
  return text.replace(/→/g, "->");
}

const iconStroke = {
  fill: "none",
  stroke: MUTED,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <Svg width={7.5} height={7.5} viewBox="0 0 24 24" style={styles.contactIcon}>
      {children}
    </Svg>
  );
}

const MailIcon = () => (
  <Icon>
    <Rect x={3} y={4} width={18} height={16} rx={2} {...iconStroke} />
    <Path d="m4 6 8 7 8-7" {...iconStroke} />
  </Icon>
);

const PhoneIcon = () => (
  <Icon>
    <Path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
      {...iconStroke}
    />
  </Icon>
);

const PinIcon = () => (
  <Icon>
    <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" {...iconStroke} />
    <Circle cx={12} cy={10} r={3} {...iconStroke} />
  </Icon>
);

const LinkIcon = () => (
  <Icon>
    <Path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" {...iconStroke} />
    <Line x1={8} y1={12} x2={16} y2={12} {...iconStroke} />
  </Icon>
);

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

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow} wrap={false}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{pdfSafe(children)}</Text>
    </View>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <Text style={styles.sectionHeading} minPresenceAhead={60}>
      {children}
    </Text>
  );
}

function ProjectWork({ project }: { project: Project }) {
  return (
    <View style={styles.sub} wrap={false}>
      <Text style={styles.subTitle}>{project.name}</Text>
      <Bullet>{project.description}</Bullet>
      {project.bullets.map((bullet) => (
        <Bullet key={bullet.slice(0, 40)}>{bullet}</Bullet>
      ))}
      <Text style={styles.stack}>Skills: {project.tags.join(", ")}</Text>
    </View>
  );
}

function Role({ role }: { role: Experience }) {
  return (
    <View style={styles.entry} wrap={false}>
      <View style={styles.roleHead}>
        <Text style={styles.roleTitle}>{role.role}</Text>
        <Text style={styles.roleDates}>{role.period}</Text>
      </View>
      <Text style={styles.roleMeta}>
        <Text style={styles.company}>{role.company}</Text>
        <Text style={styles.metaRest}> | {role.location}</Text>
      </Text>
      {(role.resumeBullets ?? role.bullets).map((bullet) => (
        <Bullet key={bullet.slice(0, 40)}>{bullet}</Bullet>
      ))}
    </View>
  );
}

function PublicProject({ project }: { project: Project }) {
  const links = [
    project.link && { label: project.link.label, url: project.link.url },
    project.demoUrl && { label: "Live", url: project.demoUrl },
    project.npmUrl && { label: "npm", url: project.npmUrl },
  ].filter((l): l is { label: string; url: string } => Boolean(l));
  return (
    <View style={styles.entry} wrap={false}>
      <Text style={styles.description}>
        <Text style={styles.lead}>{project.name}: </Text>
        {pdfSafe(project.description)}
      </Text>
      {links.length > 0 && (
        <View style={styles.linksRow}>
          {links.map((l) => (
            <Link key={l.url} style={styles.linkPill} src={l.url}>
              {l.label}: {l.url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </Link>
          ))}
        </View>
      )}
    </View>
  );
}

export function ResumeDocument() {
  const productionWork = projects.filter((p) => p.status === "Production");
  const publicWork = projects.filter((p) => p.status === "Personal Project" && p.inResume !== false);

  return (
    <Document title={`${profile.name} — CV`} author={profile.name}>
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.headline}>{profile.resumeHeadline}</Text>
        <View style={styles.contactRow}>
          <ContactItem icon={<MailIcon />} text={profile.email} href={`mailto:${profile.email}`} />
          <ContactItem icon={<PhoneIcon />} text={profile.phone} />
          <ContactItem icon={<PinIcon />} text={profile.location} />
          <ContactItem icon={<LinkIcon />} text="linkedin.com/in/abhisek-mishra-64a97873" href={profile.linkedin} />
          <ContactItem icon={<LinkIcon />} text="github.com/AbhisekMishra" href={profile.github} />
          <ContactItem icon={<LinkIcon />} text={siteUrl.replace("https://", "")} href={siteUrl} />
        </View>

        <SectionHeading>Summary</SectionHeading>
        <Text style={styles.paragraph}>{profile.resumeSummary}</Text>

        <SectionHeading>Technical Expertise</SectionHeading>
        {skillGroups.map((group) => (
          <View key={group.label} style={styles.skillRow}>
            <Text style={styles.skillLabel}>{group.label}</Text>
            <Text style={styles.skillValue}>{group.skills.join(", ")}</Text>
          </View>
        ))}

        <SectionHeading>Selected Work at Emirates NBD</SectionHeading>
        {productionWork.map((project) => (
          <ProjectWork key={project.name} project={project} />
        ))}

        <SectionHeading>Experience</SectionHeading>
        {experience.map((role) => (
          <Role key={`${role.company}-${role.role}-${role.period}`} role={role} />
        ))}

        <SectionHeading>Open Source &amp; Writing</SectionHeading>
        {publicWork.map((project) => (
          <PublicProject key={project.name} project={project} />
        ))}
        <Text style={styles.description}>
          <Text style={styles.lead}>Writing: </Text>
          Posts on building agents from first principles: the agent loop, guardrails and context
          management, at {siteUrl.replace("https://", "")}/blog.
        </Text>

        <SectionHeading>Education &amp; Certifications</SectionHeading>
        <View style={styles.entry} wrap={false}>
          <View style={styles.roleHead}>
            <Text style={styles.roleTitle}>{education.degree}</Text>
            <Text style={styles.roleDates}>{education.period}</Text>
          </View>
          <Text style={styles.roleMeta}>
            <Text style={styles.company}>{education.school}</Text>
            <Text style={styles.metaRest}> | {education.detail}</Text>
          </Text>
          {certifications.map((item) => (
            <Bullet key={item.slice(0, 40)}>{item}</Bullet>
          ))}
        </View>
      </Page>
    </Document>
  );
}
