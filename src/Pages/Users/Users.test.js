import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Users from './Users'
test('show User List text', async () => {
    render(<Users/>, { wrapper: MemoryRouter })
    const title = await waitFor(() => {
        return screen.getByText(/User List/i)
    }, { timeout: 3000 })
    expect(title).toBeInTheDocument()
  })