import React from 'react';
import { Box } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import type { ProjectGalleryCell, ProjectGalleryRow } from '../../../types/data/project';
import type { Slide } from 'yet-another-react-lightbox/*';
import S from './styles';

const renderCell = (cell: ProjectGalleryCell): JSX.Element => {
  if (!cell.path) return <></>;

  if (cell.type === 'image link') {
    return <img className="Loadable-Image" src={cell.path} loading="lazy" {...cell.alt && { alt: cell.alt }} />;
  }
  if (cell.type === 'direct video link') {
    return <video className="Loadable-Direct-Video" src={cell.path} autoPlay loop muted />;
  }
  if (cell.type === 'embedded video link') {
    const videoLink = `${cell.path}?mute=1`;
    return (
      <Box className="iframe-container Loadable-Embedded-Video-Container">
        <iframe width="420" height="315" src={videoLink} className="video" allowFullScreen />
      </Box>
    );
  }

  return <></>;
};

export const renderGalleryRow = (
  galleryRow: ProjectGalleryRow,
  isGallerySpaced: boolean,
  i: number,
  setIsLightboxOpen: Dispatch<SetStateAction<boolean>>,
  slideIndexUpperBoundary: number,
  setSlideIndex: Dispatch<SetStateAction<number>>,
  cursorWrapperRef: React.RefObject<HTMLDivElement | null>,
): JSX.Element => {
  const { cells, cellAmount } = galleryRow;
  const actualCellAmount = Math.min(cells.length, cellAmount);

  return (
    <S.ProjectGalleryRow
      key={i}
      className="ProjectGallery-Grid-Row"
      cellAmount={cellAmount}
      isGallerySpaced={isGallerySpaced}
    >
      {cells.slice(0, actualCellAmount).map((cell, j) => {
        const startIndex = slideIndexUpperBoundary - actualCellAmount;
        const slideIndex = startIndex + j;

        return cell.path ? (
          <Box
            key={j}
            className="ProjectGallery-Grid-Cell"
            onClick={(e) => {
              e.preventDefault();
              if (cell.type === 'image link' || cell.type === 'direct video link') {
                setSlideIndex(slideIndex);
                setIsLightboxOpen(true);
              }
            }}
            onMouseEnter={() => {
              if (cell.type === 'embedded video link' && cursorWrapperRef.current) {
                cursorWrapperRef.current.style.display = 'none';
              }
            }}
            onMouseLeave={() => {
              if (cell.type === 'embedded video link' && cursorWrapperRef.current) {
                cursorWrapperRef.current.style.display = 'block';
              }
            }}
          >
            {renderCell(cell)}
          </Box>
        ) : (
          <></>
        );
      })}
    </S.ProjectGalleryRow>
  );
};

export const getLightboxSlides = (gallery: Array<ProjectGalleryRow>): Slide[] => {
  const slides: Slide[] = [];

  for (let i = 0; i < gallery.length; i += 1) {
    const galleryRow = gallery[i];

    for (let j = 0; j < galleryRow.cellAmount; j += 1) {
      const galleryCell = galleryRow.cells[j];
      if (!galleryCell || !galleryCell.type || !galleryCell.path) continue;

      if (galleryCell.type === 'image link') {
        slides.push({
          type: 'image',
          src: galleryCell.path,
        });
      } else if (galleryCell.type === 'direct video link') {
        slides.push({
          type: 'video',
          width: 1280,
          height: 720,
          sources: [
            {
              src: galleryCell.path,
              type: 'video/mp4',
            },
          ],
        });
      }
    }
  }

  return slides;
};
