import React from 'react'
import { FormGroup,Row,Col, FormControl } from 'react-bootstrap'
import './MessageForm.css'

function MessageForm() {
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <>
    <div className='message-output'></div>
    <form onClick={handleSubmit}>
    <Row>
        <Col md={11}>
            <FormGroup>
                 <FormControl type='text'placeholder='enter your message'>

                 </FormControl>
            </FormGroup>
        </Col>
        <Col md={1}>
            <button variant='primary' className='btn' type='submit'>
                Submit
            </button>
        </Col>
    </Row>

    </form>
    </>
  )
}

export default MessageForm
