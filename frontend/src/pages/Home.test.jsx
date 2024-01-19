import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Home from './Home';
import jest from 'jest';


jest.mock('axios');

const mockBooks = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
];

describe('Home Component', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: { data: mockBooks } });
    });

    test('renders component with books', async () => {
        render(<Home />);

        await waitFor(() => {
            expect(screen.getByText('Book 1')).toBeInTheDocument();
            expect(screen.getByText('Book 2')).toBeInTheDocument();
        });
    });

    test('handles search correctly', async () => {
        render(<Home />);

        // Type in the search bar
        userEvent.type(screen.getByPlaceholderText('Search by title or author'), 'Book 1');

        // Click the search button
        userEvent.click(screen.getByText('Search'));

        await waitFor(() => {
            // Assert that the filtered book is displayed
            expect(screen.getByText('Book 1')).toBeInTheDocument();
            // Assert that the other book is not displayed
            expect(screen.queryByText('Book 2')).toBeNull();
        });
    });
});
