import { render, screen } from '@testing-library/react';
import Home from './Home'
test('show User Post text', async () => {
    render(<Home/>)
    const title = screen.getByText(/Welcome/i)
    expect(title).toBeInTheDocument()
})