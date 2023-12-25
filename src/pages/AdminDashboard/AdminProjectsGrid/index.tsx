import React from 'react';
import { CircularProgress } from '@mui/material';
import S from './styles';
import useProjects from '../../../hooks/useProjects';
import AdminProjectsGridBox from './AdminProjectsGridBox';
import { useQueryClient } from '@tanstack/react-query';

const AdminProjectsGrid = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { projects, isLoading } = useProjects({ summary: true });

  return (
    <S.AdminProjectsGrid>
      {isLoading ? (
        <S.LoadingBox>
          <CircularProgress />
        </S.LoadingBox>
      ) : (
        projects.map((project, i) => <AdminProjectsGridBox key={i} project={project} queryClient={queryClient} />)
      )}
    </S.AdminProjectsGrid>
  );
};

export default AdminProjectsGrid;