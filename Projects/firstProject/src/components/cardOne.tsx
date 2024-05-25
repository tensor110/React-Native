import {View, Text, Image} from 'react-native';
import React from 'react';
import CardOneStyle from '../styles/CardOneStyle';

interface CardOneProps {
  name: string;
  image: any; // Assuming image is a string URL or path
  type: string;
  hp: number;
  moves: string[];
  weakness: string[];

}

const getTypeDetails = (types) => {
    switch (types.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

const CardOne: React.FC<CardOneProps> = ({
  name,
  image,
  type,
  hp,
  moves,
  weakness,
}) => {
    const{borderColor, emoji} = getTypeDetails(type)
  return (
    <View style={CardOneStyle.container}>
      <View style={CardOneStyle.nameContainer}>
        <Text style={CardOneStyle.name}>{name}</Text>
        <Text style={CardOneStyle.hp}>♥{hp}</Text>
      </View>

      <Image source={image}  style={CardOneStyle.image} accessibilityLabel={`${name} pokemon`} resizeMode='contain'/>

    <View style={CardOneStyle.typeContainer}>
      <View style={[CardOneStyle.badge, { borderColor: borderColor}]}>
        <Text style={CardOneStyle.typeEmoji}>{emoji}</Text>
        <Text style={CardOneStyle.typeText}>{type}</Text>
      </View>
      </View>
      <View style={CardOneStyle.moveContainer}>
        <Text style={CardOneStyle.move}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={CardOneStyle.weaknessContainer}>
        <Text style={CardOneStyle.weakness}>Weakness: {weakness.join(", ")}</Text>
      </View>
    </View>
  );
};

export default CardOne;
