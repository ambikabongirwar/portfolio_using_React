import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from "uuid"; 

import {Modal} from 'react-bootstrap';

function FormatTitle(props) {
    return (props.message).length > 35 ? (props.message).slice(0, 35) + "..." : props.message;
}

function RecommendationCard(props) {
    const{name, company, designation, message} = props.recommendation;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*formatTitle = () => {
        return title.length > 35 ? title.slice + "..." : title;
    };*/

    return (
        <div>
            <div onClick = {handleShow}>
                <div className = "card shadow" key = {uuid()}>
                    <div className = "card-body">
                        <h5> <FormatTitle message = {message}/> </h5>
                        <p> {name} </p>
                        <p> {designation} at {company} </p>
                    </div>
                </div>
            </div>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Body >
                    <h5 className = "text-center"> {message} </h5>
                    <p className = "text-center"> {name} </p>
                    <p> {designation} at {company} </p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default RecommendationCard;

/*
class RecommendationCard extends Component {
    state = {
        show: false,
        setShow: false,
    };

    handleShow = () => {
        this.setState({setShow: true})
    };

    handleClose = () => {
        this.setState({setShow: false})
    };

    render() { 
        const {title, excerpt} = this.props.recommendation;

        return ( 
            <div>
                <div onClick = {this.handleShow}>
                    <div className = "card shadow" key = {uuid()}>
                        <div className = "card-body">
                            <h5> {title} </h5>
                            <p> {excerpt} </p>
                        </div>
                    </div>
                </div>

                <Modal show = {this.state.show} onHide = {this.handleClose}>
                <Modal.Body>
                    <h5> {title} </h5>
                    <p> {excerpt} </p>
                </Modal.Body>
                </Modal>
            </div>
        );
    }
}
 
export default RecommendationCard;*/