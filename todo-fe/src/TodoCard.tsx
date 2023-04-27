import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Todo } from '@types*';
import { api } from './api';

interface Props {
  todo: Todo;
}
export const TodoCard = ({ todo }: Props) => {
  const toast = useToast();
  const deleteTodo = async () => {
    const response = await fetch(`${api}/todos/${todo.id}`, {
      method: 'DELETE',
    });
    if (response.status == 200) {
      toast({
        title: 'Todo deleted successfully.',
        status: 'success',
      });
    } else {
      toast({
        title: 'Something went wrong.',
        status: 'error',
      });
    }
  };

  return (
    <Flex
      flexBasis="18%"
      justifyContent="center"
      alignItems="center"
      padding={4}
      bgColor="purple.600"
      color="white"
      fontSize="xl"
      fontWeight="bold"
      textAlign="center"
      borderRadius="5px">
      <Text flexBasis="70%">{todo.title}</Text>
      <Button
        ml={2}
        flexBasis="30%"
        height="100%"
        minHeight="50px"
        size="lg"
        colorScheme="purple"
        _hover={{ bgColor: 'purple.200' }}
        onClick={deleteTodo}>
        <CloseIcon />
      </Button>
    </Flex>
  );
};
