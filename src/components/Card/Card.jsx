import React from 'react';
import {
  CardContainer,
  CardShared,
  CardSharedWeblink,
  CardTitle,
  CardBottom,
  CardAuthor,
  CardStats,
  CardView,
  CardShare,
  CardLike
} from './CardStyles';

export const Card = ({ title, author, views, likes, sharedTo, isWeblink }) => {
  return (
    <CardContainer>
      {sharedTo && !isWeblink && (
        <CardShared href="#">
          Shared to <span>{sharedTo}</span>
        </CardShared>
      )}
      {isWeblink && <CardSharedWeblink href="#">Shared via weblink</CardSharedWeblink>}
      
      <CardTitle>{title}</CardTitle>

      <CardBottom>
        <CardAuthor href="#">{author}</CardAuthor>
        {views || likes ? (
          <CardStats>
            {views && <CardView>{views}</CardView>}
            {likes && <CardLike>{likes}</CardLike>}
          </CardStats>
        ) : (
          <CardShare href="#">Share</CardShare>
        )}
      </CardBottom>
    </CardContainer>
  );
};