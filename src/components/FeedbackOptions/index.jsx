import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackButton
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </FeedbackButton>
  ));
};
