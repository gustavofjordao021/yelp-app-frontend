import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const COLLECTION_SERVICE = {
  newCollection(newCollectionData) {
    return service.post("/app/create-collection", newCollectionData);
  },

  retrieveCollections() {
    return service.get(`/app/all-collections`);
  },

  updateCollection(collectionId, updatedCollectionData) {
    return service.post(`/app/${collectionId}/update`, updatedCollectionData);
  },

  deleteCollection(collectionId) {
    return service.post(`/app/${collectionId}/delete`);
  },
};

export default COLLECTION_SERVICE;
