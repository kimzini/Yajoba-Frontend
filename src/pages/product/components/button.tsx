interface ButtonProps {
    isChecked: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

export const DayButton: React.FC<ButtonProps> = ({ isChecked, onClick, children }) => {
    return(
        <button className={`p-[1rem] items-center justify-center border rounded-xs text-small16 font-regular ${
            isChecked ? 'bg-primary-10 text-primary border-primary' : 'bg-neutral-100 text-placeholder border-neutral-80'}`}
            onClick={onClick}>
            {children}
        </button>
    )
}