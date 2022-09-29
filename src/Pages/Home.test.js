import { render, screen } from '@testing-library/react';
import Home from './Home'
test('show Welcome text', async () => {
    render(<Home/>)
    const title = screen.getByText(/Welcome/i)
    expect(title).toBeInTheDocument()
})