import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";

export type List = {
  label: string;
  status: "unfilled" | "filled";
};

type Props = {
  list: List[];
};

const ListCompleted: React.FC<Props> = ({ list }) => {
  const getMark = (status: List["status"]) => {
    if (status === ("filled" as const)) {
      return { as: MdCheckCircle, color: "green.500" };
    }

    return { as: IoCloseCircleSharp, color: "red.500" };
  };

  return (
    <List spacing={3}>
      {list.map((list, index) => (
        <ListItem key={index}>
          <ListIcon {...getMark(list.status)} />
          {list.label}
        </ListItem>
      ))}
    </List>
  );
};

export default ListCompleted;
