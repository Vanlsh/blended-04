import { Section, Container, Header, Text, TodoList, Form } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          <Form />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
