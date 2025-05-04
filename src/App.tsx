// src/App.tsx
import {
  AppShell,
  Burger,
  Group,
  Title,
  NavLink,
  Stack,
  Container,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome2,
  IconFileText,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Routes, Route, Link, useLocation } from "react-router-dom"; // Import routing components
import { ResumePage } from "./pages/ResumePage";

// Keep HomePageContent as defined before or move to its own file e.g., src/pages/HomePage.tsx

const HEADER_HEIGHT = 60;
function App() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation(); // Get current location from router

  // Derive active link from the current path
  const getActiveIdFromPath = (pathname: string) => {
    if (pathname === "/resume") return "resume";
    // Add more routes here if needed
    return "home"; // Default to home
  };
  const activePageId = getActiveIdFromPath(location.pathname);

  // Navigation data - Update hrefs to actual paths, add 'component' prop for NavLink
  const navLinks = [
    {
      id: "home",
      icon: IconHome2,
      label: "Home",
      href: "/",
      isExternal: false,
      component: Link,
    },
    {
      id: "resume",
      icon: IconFileText,
      label: "Resume",
      href: "/resume",
      isExternal: false,
      component: Link,
    },
    {
      id: "linkedin",
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gabriele-matiddi/",
      isExternal: true,
    }, // <-- Make sure this is your correct URL
    {
      id: "github",
      icon: IconBrandGithub,
      label: "GitHub",
      href: "https://github.com/gabrimatx",
      isExternal: true,
    },
  ];

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        {/* ... Header content (Burger, Title) ... */}
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={3}>gabrimatx.github.io</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack justify="flex-start">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={link.href} // Use the path here
              label={link.label}
              leftSection={<link.icon size="1rem" stroke={1.5} />}
              // Use 'component' prop for internal links to integrate with React Router's Link
              component={link.component as any} // Use 'as any' or type correctly if needed
              // Pass 'to' prop if using Link component via 'component' prop
              {...(link.component === Link ? { to: link.href } : {})}
              // Active state based on derived activePageId
              active={!link.isExternal && link.id === activePageId}
              onClick={() => {
                // Close navbar on mobile after clicking a link
                if (opened) {
                  toggle();
                }
              }}
              // External link props
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
            />
          ))}
        </Stack>
      </AppShell.Navbar>

      {/* --- Main Content Area with Routes --- */}
      <AppShell.Main
        style={{
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          flex: 1,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePageContent />} />{" "}
          {/* Define HomePageContent */}
          <Route path="/resume" element={<ResumePage />} />
          {/* Add other routes here */}
          <Route path="*" element={<HomePageContent />} />{" "}
          {/* Fallback route */}
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

// Define HomePageContent here or import from src/pages/HomePage.tsx
function HomePageContent() {
  return (
    <Container>
      <Title order={1} mt="xl" mb="lg">
        Welcome!
      </Title>
      <Text size="xl" mb="xl">
        I am Gabriele Matiddi, and I am currently a software engineer at
        Grammarly, where I returned as a full time employee after an internhsip.
        I obtained my bachelor's degree in computer science & AI at Sapienza
        University of Rome with honours.
      </Text>
    </Container>
  );
}
