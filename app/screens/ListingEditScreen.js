import React, {useState} from 'react';
import {StyleSheet} from 'react-native'
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms";
import colors from '../config/colors';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi  from '../api/listings';
import Screen from '../components/Screen';
import styles from '../config/styles';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title : Yup.string().required().min(1).label("Title"),
    price : Yup.number().required().min(1).max(10000).label("Price"),
    description : Yup.string().label("Decription"),
    category : Yup.object().required().nullable().label("Category"),
    images : Yup.array().min(1, "Please Select at least one Image."),
});

const categories = [
    { label : "Furniture", value : 1, backgroundColor : colors.furniture, icon : 'floor-lamp' },
    { label : "Cars", value : 2, backgroundColor : colors.car, icon : 'car'  },
    { label : "Camera", value : 3, backgroundColor : colors.camera, icon : 'camera'  },
    { label : "Games", value : 4, backgroundColor : colors.game, icon : 'cards' },
    { label : "Clothing", value : 5, backgroundColor : colors.clothing, icon : 'shoe-heel'  },
    { label : "Sports", value : 6, backgroundColor : colors.sports, icon : 'basketball'  },
    { label : "Movies & Music", value : 7, backgroundColor : colors.movie, icon : 'headphones' },
    { label : "Books", value : 8, backgroundColor : colors.book, icon : 'book-open-variant'  },
    { label : "Others", value : 9, backgroundColor : colors.other, icon : 'more'  },

];

function ListingEditScreen() {
    const location = useLocation();
    const [uploadVisible, setUploadVisible]= useState(false);
    const [progress, setProgress]= useState(0);

    const handleSubmit = async (listing) => {
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if(!result.ok) {
            setUploadVisible=(false);
            return alert('Could not save the listing.');
        }
    }

    return (
        <Screen style = {styles.container}>
            <UploadScreen onDone = {()=> setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <AppForm
                initialValues = {{
                    title : "",
                    price : "",
                    description : "",
                    category : null,
                    images : [],
                }}
                onSubmit= {handleSubmit}
                validationSchema = {validationSchema}
            >
                <FormImagePicker name = "images" />
                <AppFormField maxLength = {255} name = "title" placeholder = "Title" />
                <AppFormField
                    keyboardType = "numeric"
                    maxLength = {8}
                    name = "price"
                    placeholder = "price"
                    width = {120}
                />
                <AppFormPicker 
                    items = {categories}
                    name = "category"
                    numberOfColumns = {3}
                    PickerItemComponent = {CategoryPickerItem}
                    placeholder = "category"
                    width = "50%"
                />
                <AppFormField
                    maxLength = {255}
                    multiline
                    name = "description"
                    numberOfLines = {3}
                    placeholder = "Description"
                />
                <SubmitButton title = "Post" />
            </AppForm>
        </Screen>
    )
}

export default ListingEditScreen;
