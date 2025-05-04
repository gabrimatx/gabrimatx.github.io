// src/pages/ResumePage.tsx
import {
  Container,
  Title,
  Text,
  Timeline,
  Stack,
  List,
  ThemeIcon,
  Badge,
  Group,
  Anchor,
  Space,
} from "@mantine/core";
import {
  IconBriefcase,
  IconSchool,
  IconPointFilled,
  IconCode,
  IconAward,
  IconStar,
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
  IconLink, // Generic link icon
} from "@tabler/icons-react";

// Helper component for consistent section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Title order={2} mb="lg" mt="xl">
    {children}
  </Title>
);

// Helper for Tech Badges
const TechBadge = ({ tech }: { tech: string }) => (
  <Badge variant="light" size="sm" radius="sm" mr={5} mt={3}>
    {tech}
  </Badge>
);

export function ResumePage() {
  return (
    <Container size="md" py="xl">
      {/* --- Header / Contact Info --- */}
      <Stack align="center" mb="xl">
        <Title order={1}>Gabriele Matiddi</Title>
        <Group gap="xs" wrap="wrap" justify="center">
          <Group gap={5}>
            <IconPhone size={16} stroke={1.5} />
            <Text size="sm">+39 3296211865</Text>
          </Group>
          <Text size="sm" c="dimmed">
            |
          </Text>
          <Group gap={5}>
            <IconMapPin size={16} stroke={1.5} />
            <Text size="sm">Berlin</Text>
          </Group>
          <Text size="sm" c="dimmed">
            |
          </Text>
          <Group gap={5}>
            <IconMail size={16} stroke={1.5} />
            <Anchor href="mailto:gabrimat1@protonmail.ch" size="sm">
              gabrimat1@protonmail.ch
            </Anchor>
          </Group>
          <Text size="sm" c="dimmed">
            |
          </Text>
          <Group gap={5}>
            <IconBrandLinkedin size={16} stroke={1.5} />
            <Anchor
              href="https://www.linkedin.com/in/gabrielematiddi/"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              {" "}
              {/* <-- TODO: Verify/Update LinkedIn URL */}
              LinkedIn
            </Anchor>
          </Group>
          <Text size="sm" c="dimmed">
            |
          </Text>
          <Group gap={5}>
            <IconBrandGithub size={16} stroke={1.5} />
            <Anchor
              href="https://github.com/gabrimatx"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              GitHub
            </Anchor>
          </Group>
        </Group>
      </Stack>
      {/* --- Experience --- */}
      <SectionTitle>Experience</SectionTitle>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        {/* Grammarly - Software Engineer */}
        <Timeline.Item
          bullet={<IconBriefcase size={14} />}
          title="Software Engineer @ Grammarly"
        >
          <Text c="dimmed" size="sm">
            September 2024 – Present | Berlin, Germany
          </Text>
          <List
            spacing="xs"
            size="sm"
            mt="sm"
            icon={
              <ThemeIcon size={16} light Varian light color="gray" radius="xl">
                <IconPointFilled size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Engineered LLM post-processing pipeline (text truncation, UTF16
              encoding fixes, newline restoration, hallucination prevention)
              increasing paragraph rewrite acceptance rate (40% → 60%) thanks to
              overall error reduction and quality increase.
              <TechBadge tech="Python" />
            </List.Item>
            <List.Item>
              Contributed to delivery of 100% p0s task and setup of 6
              experiments for the quality track, and assisted with roll-out
              handling and decision.
              <TechBadge tech="Statsig" />
              <TechBadge tech="Grafana" />
              <TechBadge tech="Prometheus" />
            </List.Item>
            <List.Item>
              Designed concurrent algorithm for correction revert detection
              achieving 90% accuracy with under 1ms latency per iteration.
              Released to entire user base for feedback collection.
              <TechBadge tech="Java Spring" />
            </List.Item>
            <List.Item>
              Handled internal deployment of Llama-70B model for experiments.
              Performed loadtesting and provided estimations to select optimal
              approach (between internal deployment, Databricks, AWS Bedrock),
              allowing to save 35% of deployment cost.
              <TechBadge tech="Locust" />
              <TechBadge tech="AWS EC2/ECS" />
              <TechBadge tech="AWS Bedrock" />
            </List.Item>
            <List.Item>
              Performed data pipeline engineering work for automatic correction
              suppression.
              <TechBadge tech="Databricks" />
              <TechBadge tech="PySpark" />
            </List.Item>
          </List>
        </Timeline.Item>

        {/* Grammarly - Intern */}
        <Timeline.Item
          bullet={<IconBriefcase size={14} />}
          title="Software Engineering Intern @ Grammarly"
        >
          <Text c="dimmed" size="sm">
            June 2024 – August 2024 | Berlin, Germany
          </Text>
          <List
            spacing="xs"
            size="sm"
            mt="sm"
            icon={
              <ThemeIcon size={16} light color="gray" radius="xl">
                <IconPointFilled size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Developed and delivered a real-time intelligent voice drafting
              system for an internal prototyping project. Achieved the initial
              project milestone in just 1 month, significantly ahead of the
              3-month timeline anticipated for a project of this scope.
              <TechBadge tech="Typescript" />
              <TechBadge tech="React" />
              <TechBadge tech="Azure" />
            </List.Item>
            <List.Item>
              Implemented indexing techniques that reduced computing time down
              to 20% for longer documents with respect to the original approach.
              <TechBadge tech="ShareDB (OT based)" />
              <TechBadge tech="Python" />
            </List.Item>
          </List>
        </Timeline.Item>
      </Timeline>
      {/* --- Education --- */}
      <SectionTitle>Education</SectionTitle>
      <Timeline active={0} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={<IconSchool size={14} />}
          title="Bachelor of Science in Computer Science and AI"
        >
          <Text c="dimmed" size="sm">
            Sapienza University of Rome | Sept 2021 - July 2024 | Rome, Italy
          </Text>
          <Text size="sm" mt={3}>
            Average: 29.44/30 (Top 2%), Final: 110L/110
          </Text>
          <List
            spacing="xs"
            size="sm"
            mt="sm"
            icon={
              <ThemeIcon size={16} light color="gray" radius="xl">
                <IconPointFilled size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Text fw={500} span>
                Honours Programme:
              </Text>{" "}
              Program reserved to top 6 students in the course. Research focus
              in Computer Vision.
            </List.Item>
            <List.Item>
              <Text fw={500} span>
                Teaching assistant:
              </Text>{" "}
              Worked as a teaching assistant for the algorithms course.
            </List.Item>
            <List.Item>
              <Text fw={500} span>
                Scholarship:
              </Text>{" "}
              Student-Collaboration Scholarship, Outstanding student scholarship
              (Tuition fees waiver). Both merit based.
            </List.Item>
          </List>
        </Timeline.Item>
      </Timeline>
      {/* --- Projects --- */}
      <SectionTitle>Projects</SectionTitle>
      <Timeline active={2} bulletSize={24} lineWidth={2}>
        {/* Online Scheduling */}
        <Timeline.Item
          bullet={<IconCode size={14} />}
          title="Online Scheduling with Predictions (research internship, thesis)"
        >
          <Text c="dimmed" size="sm">
            2024
          </Text>
          <Group mt={3}>
            <TechBadge tech="Python" />
            <TechBadge tech="MatPlotLib" />
          </Group>
          <List
            spacing="xs"
            size="sm"
            mt="sm"
            icon={
              <ThemeIcon size={16} light color="gray" radius="xl">
                <IconPointFilled size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Experimental analysis of current scheduling algorithms (augmented
              with machine learned predictions) against the Google Cluster Trace
              dataset.
            </List.Item>
            <List.Item>
              Proposal of new self-balancing algorithm that experimentally
              performs better than the state of the art.
            </List.Item>
          </List>
        </Timeline.Item>

        {/* ParallelPCA */}
        <Timeline.Item bullet={<IconCode size={14} />} title="ParallelPCA">
          <Text c="dimmed" size="sm">
            2024
          </Text>
          <Group mt={3}>
            <TechBadge tech="C" />
            <TechBadge tech="POSIX Threads" />
            <TechBadge tech="MPI" />
          </Group>
          <List
            spacing="xs"
            size="sm"
            mt="sm"
            icon={
              <ThemeIcon size={16} light color="gray" radius="xl">
                <IconPointFilled size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Parallel implementation of principal component analysis.
            </List.Item>
            <List.Item>
              Obtained a substantial speed up, up to 2 times with respect to the
              serial version.
            </List.Item>
          </List>
        </Timeline.Item>

        {/* SelfDrivingDrone */}
        <Timeline.Item bullet={<IconCode size={14} />} title="SelfDrivingDrone">
          <Text c="dimmed" size="sm">
            2023
          </Text>
          <Group mt={3}>
            <TechBadge tech="Python" />
            <TechBadge tech="MatPlotLib" />
            <TechBadge tech="OpenCV" />
            <TechBadge tech="PyTorch" />
          </Group>
          <List
            spacing="xs"
            size="sm"
            mt="sm"
            icon={
              <ThemeIcon size={16} light color="gray" radius="xl">
                <IconPointFilled size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              AI software utilized to fly a drone through an obstacle course.
            </List.Item>
            <List.Item>
              Implements state-of-the-art object detection algorithms such as
              Faster R-CNN and SSDLite.
            </List.Item>
          </List>
        </Timeline.Item>
      </Timeline>
      {/* --- Extracurricular Experience --- */}
      <SectionTitle>Extracurricular Experience</SectionTitle>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={<IconStar size={14} />}
          title="Cyberchallenge.it"
        >
          <Text c="dimmed" size="sm">
            Feb 2024 - May 2024 | Rome
          </Text>
          <Text size="sm" mt="xs">
            Among the 20 (top 7%) selected for national CTF competition
            training.
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconStar size={14} />}
          title="FA'23 - il Futuro Annunciato"
        >
          <Text c="dimmed" size="sm">
            July 2023 | Rieti
          </Text>
          <Text size="sm" mt="xs">
            Among the 30 selected for summer school on computer science
            research.
          </Text>
        </Timeline.Item>
      </Timeline>
      {/* --- Awards --- */}
      <SectionTitle>Awards</SectionTitle>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<IconAward size={14} />} title="OliCyber.it">
          <Text c="dimmed" size="sm">
            2021 | Rome
          </Text>
          <Text size="sm" mt="xs">
            Finalist at the national level (CTF competition)
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconAward size={14} />}
          title="Problem Solving Olympiad"
        >
          <Text c="dimmed" size="sm">
            2018 | Cesena
          </Text>
          <Text size="sm" mt="xs">
            First place in team programming competition
          </Text>
        </Timeline.Item>
      </Timeline>
      <Space h="xl" /> {/* Add some space at the bottom */}
    </Container>
  );
}
