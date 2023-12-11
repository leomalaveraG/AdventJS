function maxDistance(movements) {
  const moves = movements.split('');
  let left = moves.filter(move => move == '<').length
  let right = moves.filter(move => move == '>').length
  let neutral = moves.filter(move => move == '*').length
  return left-right+neutral>right-left+neutral ?
          left-right+neutral:right-left+neutral
}