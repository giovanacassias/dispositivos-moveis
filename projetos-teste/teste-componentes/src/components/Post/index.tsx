import { View, Text, Button } from "react-native";
import React, { useState } from "react";

interface PostProps {
  author: string;
  title: string;
  content: string;
  likes?: number;
}

export default function Post({ author, title, content, likes }: PostProps) {
  const [myLikes, setMyLikes] = useState<number>(likes || 0);

  const handleLike = () => {
    setMyLikes(myLikes + 1);
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <Text>Author: {author}</Text>
      <Text>Title: {title}</Text>
      <Text>Content: {content}</Text>
      {myLikes != 0 && <Text>Likes {myLikes}</Text>}

      <Button title="Like" onPress={handleLike} />
    </View>
  );
}
