import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
    options: [
      // "id": 1,
      // "productId": 1,
      // "title": "Medium",
      // "price": 30000
    ],
    //장바구니 항목 추가시 호출되는 함수
    onCreateCartItem: () => {},
  };
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      //null이 들어가면 안되서 빈문자열
      selectedOptionId: '',
    };
  }

  handleOptionChange(e) {
    this.setState({
      selectedOptionId: parseInt(e.target.value),
      quantity: 1, //수량을 바꿧을때 1로 돌아감 min="1" max="10"제한 아래 넘버타입 코드
    });
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }

  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    const { quantity, selectedOptionId } = this.state;

    const selectedOption = options.find(o => o.id === selectedOptionId);
    const totalPrice = selectedOption && selectedOption.price * quantity;

    return (
      <div>
        <select
          value={selectedOptionId}
          onChange={e => this.handleOptionChange(e)}
          required
        >
          <option disabled value="">
            옵션을 선택하세요
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          value={quantity}
          type="number"
          min="1"
          max="10"
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>가격: {totalPrice}</div>
        <button
          onClick={() => {
            const { selectedOptionId, quantity } = this.state;
            if (selectedOptionId === '') {
              alert('옵션');
            } else if (quantity < 1) {
              alert('숫자만');
            } else {
              this.props.onCreateCartItem(selectedOptionId, quantity);
            }
            this.props.onCreateCartItem(
              this.state.selectedOptionId,
              this.state.quantity
            );
          }}
        >
          장바구니에 담기
        </button>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
