// client/src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/productService'; // APIサービス

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 商品の詳細を取得する
    const fetchProduct = async () => {
      try {
        const response = await api.getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error('商品データの取得に失敗しました:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>読み込み中...</div>;

  return (
    <div>
      <h2>商品詳細</h2>
      <p>商品名: {product.name}</p>
      <p>SKU: {product.sku}</p>
      <p>在庫: {product.stock}</p>
    </div>
  );
};

export default ProductDetail;
