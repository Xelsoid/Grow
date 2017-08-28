import React from 'react';

const Playlist = () => (
      <section className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-12 pb25">
            <input type="text" className="form-control" placeholder="Filter songs"/>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Date</th>
              <th>Label</th>
              <th>Control</th>
            </tr>
            <tr>
              <td>I feel good</td>
              <td>James Brown</td>
              <td>12/29/2016</td>
              <td>Some label</td>
              <td>
                <a href="" className="btn btn-success">Add</a>
              </td>
            </tr>
            <tr>
              <td>I feel good</td>
              <td>James Brown</td>
              <td>12/29/2016</td>
              <td>Some label</td>
              <td>
                <a href="" className="btn btn-success">Add</a>
              </td>
            </tr>
            <tr>
              <td>I feel good</td>
              <td>James Brown</td>
              <td>12/29/2016</td>
              <td>Some label</td>
              <td>
                <a href="" className="btn btn-success">Add</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );

export default Playlist;
