import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import QuestionCollapsible from './QuestionCollapsible';
import S from './styles';
import { splitArrayIntoChunks } from './utils';
import useFAQs from '../../../hooks/useFAQs';

const QuestionsLists = (): JSX.Element => {
  const { faqs } = useFAQs();
  const questionsChunkSize = Math.ceil(faqs.length / 2);
  const questionsChunks = splitArrayIntoChunks(faqs, questionsChunkSize);

  return (
    <S.QuestionsListsContainer>
      {questionsChunks.map((questionsChunk) => (
        <S.QuestionsList key={uuidv4()}>
          {questionsChunk.map(({ question, answer }) => (
            <QuestionCollapsible question={question} answer={answer} key={question} />
          ))}
        </S.QuestionsList>
      ))}
    </S.QuestionsListsContainer>
  );
};

export default QuestionsLists;
