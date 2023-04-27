import { Flex } from '@chakra-ui/react';
import { Todo } from '@types';
import { TodoCard } from './TodoCard';

interface Props {
  todos: Todo[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <Flex flexWrap="wrap" gap={4} justifyContent="center">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Flex>
  );
};
