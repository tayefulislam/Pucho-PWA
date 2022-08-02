import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import ArrowButton from '../../components/ArrowButton/ArrowButton';



const HealthConditions = () => {

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
        { id: 2, name: 'Asthama' },
        { id: 3, name: 'Dementia' },
        { id: 4, name: 'Liver disease' },
        { id: 5, name: 'Thalassemia' },
        { id: 6, name: 'Blood Pressure' },
        { id: 7, name: 'Cancer' },
        { id: 8, name: 'Heart diseases' },
        { id: 9, name: 'Diabetes' },
        { id: 10, name: 'COPD' },
        { id: 11, name: 'Obesity' },
        { id: 12, name: 'Kidney Disease' },
        { id: 13, name: 'Down Syndrome' },
        { id: 14, name: 'HIV' },
        { id: 15, name: 'Pregnancy' },
        { id: 16, name: 'Smoking' },
        { id: 17, name: 'Substance use' },
        { id: 18, name: 'Other' },


    ]





    return (
        <div>

            <div className='flex flex-col justify-center items-center'>

                <h1 className='text-[20px] font-semibold mx-2 my-4 max-w-[360px]'>Do you suffer from any of the following health conditions?</h1>

                <List className='grid grid-cols-2 gap-1'
                    dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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

export default HealthConditions;