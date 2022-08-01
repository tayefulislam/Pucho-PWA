import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import ArrowButton from '../../components/ArrowButton/ArrowButton';



const CovidSymptoms = () => {

    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    // all item are here may need to change id name for better unstande

    const items = [
        { id: 1, name: 'None' },
        { id: 2, name: 'Fever or chills' },
        { id: 3, name: 'Cough' },
        { id: 4, name: 'Muscle or body aches' },
        { id: 5, name: 'Sore throat' },
        { id: 6, name: 'Congestion or runny nose' },
        { id: 7, name: 'Loss of taste or smell' },
        { id: 8, name: 'Diarrhoea' },
        { id: 9, name: 'Headache' },
        { id: 10, name: 'Difficulty breathing' },
        { id: 11, name: 'Fatigue' },
        { id: 12, name: 'Nausea or vomiting' },
        { id: 13, name: 'Others' },
    ]


    return (
        <div>

            <div className='flex flex-col justify-center items-center'>

                <h1 className='text-[20px] font-semibold mx-2 my-4 max-w-[360px]'>  Do you have any of the following symptoms of covid today?</h1>

                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {items.map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value.id}`;
                        return (
                            <ListItem className='bg-[#F1F7F7] mt-2 py-2 px-1 rounded-3xl'
                                key={value.id}
                                secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        onChange={handleToggle(value.id)}
                                        checked={checked.indexOf(value.id) !== -1}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                }
                                disablePadding
                            >
                                <ListItemButton>

                                    <ListItemText id={labelId} primary={`${value.name}`} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>

                <ArrowButton className='my-3'>Next</ArrowButton>







            </div>


        </div>
    );
};

export default CovidSymptoms;