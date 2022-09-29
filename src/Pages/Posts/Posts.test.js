import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Posts from './Posts'
test('show User Post text', async () => {
    render(<Posts/>, { wrapper: MemoryRouter })
    const title = await waitFor(() => {
        return screen.getByText(/User Post/i)
    }, { timeout: 3000 })
    expect(title).toBeInTheDocument()
  })