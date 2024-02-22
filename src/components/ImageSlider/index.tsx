import React, { useState, useRef } from "react";
import { FlatList, ViewToken } from "react-native";

import * as S from "./styles";

interface ImageSliderProps {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [imageVisibleIndex, setImageVisibleIndex] = useState(0);

  const handleChangeImageVisible = useRef((info: ChangeImageProps) => {
    setImageVisibleIndex(info.viewableItems[0].index!);
  });
  return (
    <S.Container>
      <S.ImageIndexes>
        {imagesUrl.map((_, index) => (
          <S.ImageIndex key={index} active={index === imageVisibleIndex} />
        ))}
      </S.ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <S.CarImageWrapper>
            <S.CarImage
              source={{
                uri: item,
              }}
              resizeMode="contain"
            />
          </S.CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleChangeImageVisible.current}
      />
    </S.Container>
  );
}
