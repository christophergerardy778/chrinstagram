import { Criteria } from '../domain/criteria/criteria';
import { Filter } from '../domain/criteria/filter';
import { TypeOrmCriteriaOutput } from './typeOrmCriteriaOutput';

export class TypeOrmCriteriaConverter {
  private queryValues: string[] = [];

  public convert(criteria: Criteria): TypeOrmCriteriaOutput {
    let fieldValues = {};

    if (criteria.hasFilters()) {
      const filters = criteria.getFilters();

      filters.forEach((filter: Filter, index: number) => {
        fieldValues = {
          ...fieldValues,
          [filter.field.value]: filter.filterValue.value,
        };

        this.pushQuery(TypeOrmCriteriaConverter.parseQuery(filter), index);
      });
    }

    return {
      query: this.queryValues.join(' '),
      data: fieldValues,
    };
  }

  private static parseQuery(filter: Filter) {
    return `${filter.field.value} ${filter.filterOperator} :${filter.field.value}`;
  }

  private pushQuery(query: string, index: number) {
    if (index === 0) {
      this.queryValues.push(query);
    } else {
      this.queryValues.push(`AND ${query}`);
    }
  }
}
