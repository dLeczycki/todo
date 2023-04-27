import { Box, Heading } from '@chakra-ui/react';
import { Todo } from '@types*';
import { useEffect, useState } from 'react';
import { api } from './api';
import { TodoList } from './TodoList';

export const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${api}/todos`);
      const data = await response.json();
      setTodos(data);
    })();
  });

  return (
    <Box>
      <Heading as="h1" fontSize="124px">
        todos
      </Heading>
      <TodoList todos={todos} />
    </Box>
  );
};
