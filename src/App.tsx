// src/App.tsx
import {
  AppShell,
  Burger,
  Group,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Navbar p="md">
        Navbar Content (Links etc.)
        {/* Example: <Button variant="subtle">Link 1</Button> */}
      </AppShell.Navbar>

      <AppShell.Main>
        <Container>
          <Title order={1} ta="center" mt="xl" mb="lg">
            Welcome!
          </Title>
          <Text ta="center" size="xl" mb="xl">
            This is your React + TypeScript + Mantine dark-themed site.
          </Text>
          <Group justify="center">
            <Button size="lg" variant="light">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Group>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
