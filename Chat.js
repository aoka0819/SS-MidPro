import React from 'react'
import {Container, Form, Grid} from 'semantic-ui-react';

function Chat() {
    const [msg, setMsg] = React.useState('');
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={13}>
                    <Container>
                        <Form>
                            <Form.Input
                                placeholder='type message here'
                                onChange={(e) => {setMsg(e.target.value)}}
                            />
                        </Form>
                    </Container>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Container>
                        Member List
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Chat;