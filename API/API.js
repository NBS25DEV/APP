// JavaScript Example: Reading Entities
// Filterable fields: letter, name, word, icon, sound_effect, writing_path
async function fetchLetterEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/686998337ad8fbe9b40718d7/entities/Letter`, {
        headers: {
            'api_key': 'cf0b7510864d41b09b59cdca74cc3ef6', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: letter, name, word, icon, sound_effect, writing_path
async function updateLetterEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/686998337ad8fbe9b40718d7/entities/Letter/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': 'cf0b7510864d41b09b59cdca74cc3ef6', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}
