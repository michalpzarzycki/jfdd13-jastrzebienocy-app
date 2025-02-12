import React from "react";
import styles from "./MainContent.module.css";
import AddRecipe from "./AddRecipe";
import {RecipesFromBase} from "./RecipesFromBase"
import {Icon, Button, Modal} from 'semantic-ui-react';

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            modal: false
        }
    }

    onClick() {
        
        this.setState({ modal: !this.state.modal});
    }
    render() {
        return (
            <div className={styles.MainContent}>
                <RecipesFromBase/>
                <Button 
                size="massive"
                onClick={ () =>  { this.onClick(); }}  
                circular 
                icon="plus" 
                style={{position: "fixed", bottom: 80, right: 50, background: "#FFC107" }} 
                ></Button>
                <Modal open={this.state.modal} >
                    <AddRecipe {...this.props}/>
                    <Modal.Actions>
                    <Button negative onClick={() => this.onClick()}>Zamknij</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default MainContent;