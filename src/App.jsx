import {
  Section,
  Container,
  Header,
  Text,
  TodoList,
  Form,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentToDo } from 'reduxTodo/slice';

export const App = () => {
  const isAdded = useSelector(selectCurrentToDo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {!isAdded ? <Form /> : <EditForm />}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
