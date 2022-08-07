import React from 'react';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import CrossIcon from '../../assets/icons/cross-icon.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';


// modal design 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
};




const CovidSymptoms = () => {


    // handle modal 

    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);

    const handleOpen = () => setOpen(true);




    const [checked, setChecked] = React.useState([1]);

    // console.log(checked[12])




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

                    <ListItem onClick={() => handleOpen()} className='bg-[#F1F7F7] mt-2 py-2 px-1 rounded-3xl'
                        secondaryAction={
                            <Checkbox
                                edge="end"
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>

                            <ListItemText primary="Others" />
                        </ListItemButton>
                    </ListItem>


                </List>

                <ArrowButton className='my-3'>Next</ArrowButton>




            </div>

            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style} className='rounded-xl max-w-[450px] m-1'>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Others
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Specify the other health condition you have
                            </Typography>

                            <div className='flex justify-center items-center border-[#286F6B] border-solid border-2 py-2 rounded-sm'>
                                <input type="text" placeholder="Health Condition" class="input w-full max-w-[200px] font-semibold " />
                                <button className='text-[30px] bg-[#286F6B] py-1 px-3 ml-2 rounded-lg text-white'>+</button>

                            </div>

                            <div>

                                <button className='bg-[#286F6B] flex flex-row justify-center items-center py-2 px-3 rounded-full text-white mt-2'>Arthiritis<img className='ml-2' src={CrossIcon} alt="" /></button>

                            </div>






                            <ArrowButton className='w-full mt-2'>Submit</ArrowButton>



                        </Box>
                    </Fade>
                </Modal>
            </div>



        </div>
    );
};

export default CovidSymptoms;