import { Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";
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

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 42,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
  },
  title: {
    fontSize: 11,
    color: "#333333",
    marginTop: 2,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
    fontSize: 8.5,
    color: "#444444",
  },
  contactItem: {
    marginRight: 10,
  },
  link: {
    color: "#444444",
    textDecoration: "none",
  },
  sectionHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#8a5a12",
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    paddingBottom: 3,
    marginTop: 12,
    marginBottom: 6,
  },
  paragraph: {
    marginBottom: 5,
    lineHeight: 1.35,
  },
  skillGroup: {
    marginBottom: 3,
    flexDirection: "row",
  },
  skillGroupLabel: {
    fontFamily: "Helvetica-Bold",
    width: 130,
  },
  skillGroupValue: {
    flex: 1,
  },
  entry: {
    marginBottom: 8,
  },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  entryMeta: {
    fontSize: 8.5,
    color: "#555555",
    textAlign: "right",
  },
  entrySubtitle: {
    fontSize: 9,
    color: "#8a5a12",
    marginTop: 1,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 3,
    paddingLeft: 2,
  },
  bulletDot: {
    width: 8,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.3,
  },
  tagsLine: {
    fontSize: 8,
    color: "#777777",
    marginTop: 3,
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
  return <Text style={styles.sectionHeading}>{children}</Text>;
}

function ExperienceEntry({ role }: { role: Experience }) {
  return (
    <View style={styles.entry}>
      <View style={styles.entryHeaderRow}>
        <Text style={styles.entryTitle}>
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
        <Text style={styles.entryTitle}>{project.name}</Text>
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

        <SectionHeading>Overview</SectionHeading>
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

        <View wrap={false}>
          <SectionHeading>Experience</SectionHeading>
          <ExperienceEntry role={experience[0]} />
        </View>
        {experience.slice(1).map((role) => (
          <View key={`${role.company}-${role.role}`} wrap={false}>
            <ExperienceEntry role={role} />
          </View>
        ))}

        <View wrap={false}>
          <SectionHeading>Featured Projects</SectionHeading>
          <ProjectEntry project={projects[0]} />
        </View>
        {projects.slice(1).map((project) => (
          <View key={project.name} wrap={false}>
            <ProjectEntry project={project} />
          </View>
        ))}

        <SectionHeading>Education</SectionHeading>
        <View style={styles.entry}>
          <View style={styles.entryHeaderRow}>
            <Text style={styles.entryTitle}>{education.degree}</Text>
            <Text style={styles.entryMeta}>{education.period}</Text>
          </View>
          <Text style={styles.entrySubtitle}>
            {education.school} · {education.detail}
          </Text>
        </View>

        <SectionHeading>Awards &amp; Certifications</SectionHeading>
        {certifications.map((item) => (
          <Bullet key={item.slice(0, 40)}>{item}</Bullet>
        ))}
      </Page>
    </Document>
  );
}
