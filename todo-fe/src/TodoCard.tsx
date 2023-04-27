import { Box } from '@chakra-ui/react';
import { Todo } from '@types*';

interface Props {
  todo: Todo;
}
export const TodoCard = ({ todo }: Props) => {
  return (
    <Box
      flexBasis="20%"
      margin={2}
      padding={4}
      height="100px"
      bgColor="purple.500"
      color="white"
      fontSize="xl"
      fontWeight="bold"
      textAlign="center"
      borderRadius="5px">
      {todo.title}
    </Box>
  );
};
