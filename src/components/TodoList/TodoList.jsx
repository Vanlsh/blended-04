import { Text, GridItem, Grid, Todo } from 'components';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const toDos = useSelector(state => state.todos.todos.items);
  console.log(toDos);
  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {' '}
        {toDos.map(({ text, id }, index) => (
          <GridItem key={id}>
            <Todo text={text} counter={index + 1} id={id} />
          </GridItem>
        ))}{' '}
      </Grid>
    </>
  );
};
