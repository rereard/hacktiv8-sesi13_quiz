import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('clicked home at navbar go to home page', () => {
  render(<MemoryRouter><App/></MemoryRouter>)
  const homeRoute = screen.getByRole('linkHome')
  fireEvent.click(homeRoute)
  const header = screen.getByText(/Welcome/i)
  expect(header).toBeInTheDocument()
})
test('clicked posts at navbar go to posts page', async () => {
  render(<MemoryRouter><App/></MemoryRouter>)
  const postsRoute = screen.getByRole('linkPosts')
  fireEvent.click(postsRoute)
  const header = await waitFor(() => {
    return screen.getByText(/User Post/i)
  }, { timeout: 2000 })
  expect(header).toBeInTheDocument()
})
test('clicked users at navbar go to users page', async () => {
  render(<MemoryRouter><App/></MemoryRouter>)
  const usersRoute = screen.getByRole('linkUsers')
  fireEvent.click(usersRoute)
  const header = await waitFor(() => {
    return screen.getByText(/User List/i)
  }, { timeout: 2000 })
  expect(header).toBeInTheDocument()
})