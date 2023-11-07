import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Meta } from "@storybook/react";

import getOppositeTextColor from "@/utils/colors";

const meta: Meta = {
  title: "Colors",
};

export default meta;

export function Default() {
  const theme = useTheme();

  if (!theme) return <></>;

  return (
    <>
      <ColorPalette colors={theme.colors.neutral} type="netural" />
    </>
  );
}

function ColorPalette({
  colors,
  type,
}: {
  colors: Record<string, string>;
  type: string;
}) {
  const colorList = Object.entries(colors).sort((a, b) =>
    a[1] > b[1] ? -1 : 1,
  );

  return (
    <ColorPaletteContainer>
      <h2>{type}</h2>
      <ul>
        {colorList.map(([name, color]) => (
          <ColorPaletteItem color={color} key={color}>
            <p>{isNaN(name as unknown as number) ? name : `${type} ${name}`}</p>
            <span>{color}</span>
          </ColorPaletteItem>
        ))}
      </ul>
    </ColorPaletteContainer>
  );
}

const ColorPaletteItem = styled.li<{
  color: string;
}>`
  background-color: ${(props) => props.color};
  height: 120px;
  width: 120px;
  border-radius: 10px;
  padding: 14px;

  color: ${({ color }) =>
    getOppositeTextColor({
      backgroundColor: color,
    })};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: 600;
  }
  span {
    font-size: 12px;
  }
`;

const ColorPaletteContainer = styled.section`
  > ul {
    display: flex;
    flex-wrap: wrap;

    gap: 14px;
  }

  > h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 14px;
    margin-top: 24px;
  }
`;
