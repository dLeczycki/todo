import { Flex } from '@chakra-ui/react';
import { Todo } from '@types';
import { TodoCard } from './TodoCard';

interface Props {
  todos: Todo[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <Flex>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Flex>
  );
};
