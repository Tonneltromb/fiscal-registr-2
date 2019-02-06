import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pagination extends Component {
    static propTypes = {
        changeActivePage: PropTypes.func.isRequired,
        changePageSize: PropTypes.func.isRequired,
        totalPages: PropTypes.number,
        pageSize: PropTypes.number,
        page: PropTypes.number
    };

    preparePaginationButtons = (totalPages) => {

        const addButtons = (buttonsArray, start, count) => {
            for (let i = start; i <= count; i++) {
                buttonsArray.push(
                    <button
                        key={`page-${i}`}
                        onClick={() => this.props.changeActivePage(i)}
                        className={this.props.page === i ? 'active' : ''}
                        page={i}>{i}</button>
                )
            }
        };

      let buttons = [];
      if (totalPages < 5 && totalPages > 1) {
          addButtons(buttons, 1, totalPages);
          return buttons;
      }

      if (totalPages >= 5) {
          let backButton = (<button
              className="pagination-back"
              onClick={() => this.props.changeActivePage(this.props.page)}
              page={this.props.page - 1}>Назад</button>);
          let nextButton = (<button
              className={`pagination-back ${this.props.page > 1 ? '' : 'disable'}`}
              onClick={() => this.props.changeActivePage(this.props.page)}
              page={this.props.page + 1}>Вперед</button>);
          let unknownPaginationButtonLeft = (<button disabled className="disable" key={`unknown-pagination-button-left`}>...</button>);
          let unknownPaginationButtonRight = (<button disabled className="disable" key={`unknown-pagination-button-right`}>...</button>);

          if (this.props.page !== 1) buttons.push(backButton);

          if (this.props.page < 5) {
            addButtons(buttons, 1, 5);
            buttons.push(unknownPaginationButtonRight);
          }

          if (this.props.page >= 5 && this.props.page < totalPages - 3) {
              buttons.push(unknownPaginationButtonLeft);
              addButtons(buttons, this.props.page - 1, 3);
              buttons.push(unknownPaginationButtonRight);
          }

          if (this.props.page <= totalPages - 4) {
              buttons.push(unknownPaginationButtonLeft);
              addButtons(buttons, this.props.page, 5)
          }

          if (this.props.page !== totalPages) buttons.push(nextButton);
          return buttons;
      }
    };

    render() {
        return this.preparePaginationButtons();
    }
}

export default Pagination
