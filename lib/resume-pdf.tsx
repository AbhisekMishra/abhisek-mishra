import fs from "node:fs";
import path from "node:path";
import { Document, Page, View, Text, Link, Image, Font, StyleSheet } from "@react-pdf/renderer";
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

const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 36,
    fontSize: 8.2,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerText: {
    flex: 1,
    paddingRight: 14,
  },
  photo: {
    width: 48,
    height: 48,
    borderRadius: 6,
    objectFit: "cover",
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 16,
  },
  title: {
    fontSize: 9,
    color: "#333333",
    marginTop: 1,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    fontSize: 7.5,
    color: "#444444",
  },
  contactItem: {
    marginRight: 9,
    marginBottom: 1,
  },
  link: {
    color: "#444444",
    textDecoration: "none",
  },
  sectionHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7.75,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#8a5a12",
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    paddingBottom: 2,
    marginTop: 6,
    marginBottom: 2.5,
  },
  paragraph: {
    marginBottom: 2.5,
    lineHeight: 1.04,
  },
  skillGroup: {
    marginBottom: 1.5,
    flexDirection: "row",
  },
  skillGroupLabel: {
    fontFamily: "Helvetica-Bold",
    width: 108,
  },
  skillGroupValue: {
    flex: 1,
    lineHeight: 1.04,
  },
  entry: {
    marginBottom: 2.5,
  },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.75,
  },
  entryMeta: {
    fontSize: 7.25,
    color: "#555555",
    textAlign: "right",
  },
  entrySubtitle: {
    fontSize: 7.75,
    color: "#8a5a12",
    marginTop: 0.75,
    lineHeight: 1.04,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 1.1,
    paddingLeft: 2,
  },
  bulletDot: {
    width: 8,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.04,
  },
  tagsLine: {
    fontSize: 6.75,
    color: "#777777",
    marginTop: 1.3,
  },
});

// Helvetica (the base14 PDF font react-pdf uses) doesn't cover every
// Unicode glyph in the source copy — swap in ASCII-safe equivalents for PDF output only.
function pdfSafe(text: string): string {
  return text.replace(/→/g, "->");
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{pdfSafe(children)}</Text>
    </View>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <Text style={styles.sectionHeading} minPresenceAhead={30}>
      {children}
    </Text>
  );
}

function ExperienceEntry({ role }: { role: Experience }) {
  return (
    <View style={styles.entry}>
      <View style={styles.entryHeaderRow}>
        <Text style={styles.entryTitle} minPresenceAhead={20}>
          {role.role} — {role.company}
        </Text>
        <Text style={styles.entryMeta}>
          {role.period} · {role.location}
        </Text>
      </View>
      {role.bullets.map((bullet) => (
        <Bullet key={bullet.slice(0, 40)}>{bullet}</Bullet>
      ))}
    </View>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <View style={styles.entry}>
      <View style={styles.entryHeaderRow}>
        <Text style={styles.entryTitle} minPresenceAhead={20}>
          {project.name}
        </Text>
        <Text style={styles.entryMeta}>{project.org}</Text>
      </View>
      <Text style={styles.entrySubtitle}>{pdfSafe(project.description)}</Text>
      {project.bullets.map((bullet) => (
        <Bullet key={bullet.slice(0, 40)}>{bullet}</Bullet>
      ))}
      <Text style={styles.tagsLine}>{project.tags.join(" · ")}</Text>
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
              <Text style={styles.contactItem}>{profile.email}</Text>
              <Text style={styles.contactItem}>{profile.phone}</Text>
              <Text style={styles.contactItem}>{profile.location}</Text>
              <Link style={{ ...styles.link, ...styles.contactItem }} src={profile.linkedin}>
                linkedin.com/in/abhisek-mishra-64a97873
              </Link>
              <Link style={{ ...styles.link, ...styles.contactItem }} src={profile.github}>
                github.com/AbhisekMishra
              </Link>
              <Link style={styles.link} src={siteUrl}>
                {siteUrl.replace("https://", "")}
              </Link>
            </View>
          </View>

          {/* eslint-disable-next-line jsx-a11y/alt-text -- react-pdf's Image is a PDF primitive, not an HTML img */}
          <Image src={photoDataUri()} style={styles.photo} />
        </View>

        <SectionHeading>Professional Summary</SectionHeading>
        {profile.summary.map((paragraph) => (
          <Text key={paragraph.slice(0, 24)} style={styles.paragraph}>
            {pdfSafe(paragraph)}
          </Text>
        ))}

        <SectionHeading>Skills</SectionHeading>
        {skillGroups.map((group) => (
          <View key={group.label} style={styles.skillGroup}>
            <Text style={styles.skillGroupLabel}>{group.label}</Text>
            <Text style={styles.skillGroupValue}>{group.skills.join(", ")}</Text>
          </View>
        ))}

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
          <View style={styles.entryHeaderRow}>
            <Text style={styles.entryTitle} minPresenceAhead={20}>
              {education.degree}
            </Text>
            <Text style={styles.entryMeta}>{education.period}</Text>
          </View>
          <Text style={styles.entrySubtitle}>
            {education.school} · {education.detail}
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
