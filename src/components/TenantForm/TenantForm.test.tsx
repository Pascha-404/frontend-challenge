import React from 'react';
import { render, screen } from '@testing-library/react';
import TenantForm from './TenantForm';
import { IFormData, useFormStore } from '@/store/useFormStore';

// Create a helper component to wrap TenantForm and set the initial state
const TenantFormWrapper: React.FC<{
	initialFormState: IFormData;
	initialPageState: number;
}> = ({ initialFormState, initialPageState }) => {
	const setPage = useFormStore(state => state.setPage);
	const setFormData = useFormStore(state => state.setFormData);

	React.useEffect(() => {
		// Reset the store to the initial state
		setPage(initialPageState);
		setFormData(initialFormState);
	}, [initialFormState, initialPageState, setPage, setFormData]);

	return <TenantForm />;
};

// Helper function to render the component with a specific initial state
const renderComponent = (
	initialFormState: IFormData = { fullName: '', email: '', phoneNumber: '', salary: '' },
	initialPageState: number = 0
) => {
	return render(
		<TenantFormWrapper
			initialFormState={initialFormState}
			initialPageState={initialPageState}
		/>
	);
};

describe('TenantForm Component', () => {
	// Test if the component renders correctly with the initial page
	it('renders the form correctly', () => {
		renderComponent();
		expect(screen.getByRole('form')).toBeInTheDocument();
		expect(screen.getByTestId('progressbar')).toBeInTheDocument();
		expect(screen.getByText('Wie lautet Ihr vollständiger Name?')).toBeInTheDocument();
		expect(screen.getByLabelText('Name eingeben')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('z.B. Maxima Mustermann'));
		expect(screen.getByText('Weiter')).toBeDisabled();
		expect(screen.queryByText('Zurück')).not.toBeInTheDocument();
    });
});
