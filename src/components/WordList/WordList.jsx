import { List } from './WordList.styled';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

export default function WordList({ words, onDelete }) {
  return (
    <List>
      {words.map(word => (
        <ListItem key={word.id} sx={{ width: '360px' }}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={word.eng} secondary={word.ukr} />
          <IconButton aria-label="delete" onClick={() => onDelete(word.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
