import { FlatList} from 'react-native'

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTile';

function renderCatgoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

export default function CategoriesScreen(){
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCatgoryItem} />
}