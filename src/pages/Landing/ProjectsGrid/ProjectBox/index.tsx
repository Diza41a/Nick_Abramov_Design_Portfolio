import React, { forwardRef, useContext } from 'react';
import S from './styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  onProjectsTileMouseMove,
  onProjectsTileMouseOut,
  onProjectsTileMouseOver,
} from './utils';
import { formatStringToUriPath } from '../../../../utils/apiUtils';
import { useQueryClient } from '@tanstack/react-query';
import { GlobalContext } from '../../../../contexts/global';
import { checkIfCachedQueryDataExists } from '../../../../utils/loadingUtils';
import type { Project } from '../../../../types/data/project';

interface Props {
  project: Project
}

const ProjectBox = forwardRef(({ project }: Props, ref) => {
  const queryClient = useQueryClient();
  const {
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);
  const { category, mainImage, id, name } = project;
  const formattedProjectName = formatStringToUriPath(name);

  return (
    <S.ProjectBox className="ProjectBox-Container" ref={ref}>
      <Link
        to={`/projects/${formattedProjectName}`}
        state={{ projectId: id }}
        onClick={() => {
          const cachedProjectExists = checkIfCachedQueryDataExists(queryClient, ['project', id]);
          if (!cachedProjectExists) {
            setIsPageLoading(true);
          }
        }}
        draggable="false"
      >
        <img
          src={mainImage.path}
          className="ProjectBox-Img"
          draggable={false}
          onMouseOver={onProjectsTileMouseOver}
          onMouseOut={onProjectsTileMouseOut}
          onMouseMove={onProjectsTileMouseMove}
          loading='lazy'
          {...mainImage.alt && { alt: mainImage.alt }}
        />
        <Typography className="Category-Name">{`#${category}`}</Typography>
        <Box className="ProjectBox-Shadow" />
      </Link>
    </S.ProjectBox>
  );
});

ProjectBox.displayName = 'ProjectBox';

export default ProjectBox;
