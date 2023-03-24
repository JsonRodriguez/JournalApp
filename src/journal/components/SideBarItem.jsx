import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { startShowingNotes } from "../../store/journal"

export const SideBarItem = ({ note }) => {

    const { id, title, body } = note;
    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [ title ]);

    const onShowNote = () => {
        dispatch( startShowingNotes( note ) );
    }

    return (
        <ListItem key={ id } disablePadding>
            <ListItemButton onClick={ onShowNote } >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
