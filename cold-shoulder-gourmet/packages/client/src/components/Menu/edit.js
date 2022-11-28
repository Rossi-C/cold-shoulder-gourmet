import { Form, Col } from 'react-bootstrap';

function EditMenu({ winterMenu, setWinterMenu }) {
    return (
        <Col md="auto">
            <Form.Group controlID="menu">
                <Form.Label>Seasonal Menu</Form.Label>
                <Form.Select value={winterMenu} onChange={e => setWinterMenu(e.target.value)}>
                    <option value={'Winter'}>Winter</option>
                    <option value={'Summer'}>Summer</option>
                </Form.Select>
            </Form.Group>
        </Col>
    )
}

export default EditMenu;